import React, { useState } from 'react';
import { useNavigate, useLoaderData, Link } from 'react-router';

import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Checkbox } from '~/components/ui/checkbox';
import { CheckboxGroup } from '~/components/ui/checkbox-group';

import { ContinueButton } from '~/components/endpage/continue-button';
import { zoningCards, type zoningCard } from '~/data/zoning/zoning-cards';
import { zoningPrereqs, type zoningPrereq } from '~/data/zoning/zoning-prereqs';
import { PrereqTips } from '~/components/endpage/prereq-tips';

interface RouteParams {
  id: number;
}

interface ZEndPageLoaderData {
  card: zoningCard;
}

export const zEndPageLoader = ({ params }: { params: RouteParams }): ZEndPageLoaderData => {
  const { id } = params;
  const card: zoningCard = zoningCards[id];
  return { card };
};

export const zEndPage: React.FC = () => {
  const { card } = useLoaderData() as ZEndPageLoaderData;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [groupSelected, setGroupSelected] = useState<number[]>([]);
  const cardReqs: number[] = card.requirements;
  const cardCategoryText: string = card.categoryText;

  const handleMasterCheckboxChange = (checked: boolean) => {
    setSelected(checked);
    if (checked) {
      setGroupSelected(cardReqs);
    } else {
      setGroupSelected([]);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Planning and Zoning Requirements</h1>
        </div>
        <Card>
          <h3>{card.questionText} Request</h3>
          <h5>
            Below are the requirements you will need <em>before</em> applying for your zoning request. You will need to present these during the Zoning process.
          </h5>
          <CheckboxGroup
            value={groupSelected}
            onChange={setGroupSelected}
            className="w-full"
            label="Zoning Requirements"
            allValues={cardReqs} // Pass all possible values
            masterChecked={selected} // Pass master checkbox state
            setMasterChecked={handleMasterCheckboxChange} // Pass master checkbox state change
          >
            {card.requirements.map((reqs) => (
              <Checkbox key={zoningPrereqs[reqs].id} value={zoningPrereqs[reqs].id}>
                {zoningPrereqs[reqs].name} <PrereqTips tips={zoningPrereqs[reqs].tips} buttons={zoningPrereqs[reqs].buttons}/>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Card>
        <Card>
          <div>
            <Checkbox checked={selected} onCheckedChange={handleMasterCheckboxChange} color="warning">
              I have read the requirements and acknowledge that I have completed/acquired them prior to my application
            </Checkbox>
          </div>
        </Card>
      </div>
      <div>
        <div>
          <ContinueButton category={cardCategoryText} selected={selected} cardlink={card.endpagelink} />
        </div>
        <div>
          <p>** You will be required to login/register to our Customer Self-Service on the next page</p>
        </div>
        <div>
          <Button asChild>
            <Link to="/Assistant">Restart Assistant</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default zEndPage;