import React, { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router';
import { Card } from '~/components/ui/card';
import { Checkbox } from '~/components/ui/checkbox';
import { CheckboxGroup } from '~/components/ui/checkbox-group';
import { ContinueButton } from '~/components/endpage/ContinueButton';
import { ZoningCards, type ZoningCard } from '~/data/zoning/zoning-cards';
import { zoningPrereqs, type ZoningPrerequisite } from './zoningPrereqs';
import { ZoningPrereqTips } from './ZoningPrereqTips';

interface RouteParams {
  id: number;
}

interface ZEndPageLoaderData {
  card: ZoningCard;
}

export const zEndPageLoader = ({ params }: { params: RouteParams }): ZEndPageLoaderData => {
  const { id } = params;
  const card: ZoningCard = ZoningCards[id];
  return { card };
};

export const zEndPage: React.FC = () => {
  const { card } = useLoaderData() as ZEndPageLoaderData;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [groupSelected, setGroupSelected] = useState<number[]>([]);
  const cardReqs: number[] = card.requirements;
  const cardCategoryText: string = card.categoryText;

  function arraysEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = arr1.length; i--;) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (arraysEqual(groupSelected, cardReqs)) {
      setSelected(true);
    }
  }, [groupSelected, cardReqs]);

  useEffect(() => {
    if (selected === true) {
      setGroupSelected(cardReqs);
    }
    if (selected === false) {
      setGroupSelected([]);
    }
  }, [selected, cardReqs]);

  function cardVariant(): 'bordered' | undefined {
    if (selected) {
      return 'bordered';
    }
    return undefined;
  }

  return (
    <Grid.Container justify="center">
      <Grid css={{ p: '20px' }}>
        <Row justify="center">
          <Text h1>Planning and Zoning Requirements</Text>
        </Row>
        <Card css={{ p: '10px' }}>
          <Text h3>{card.questionText} Request</Text>
          <Text h5>
            Below are the requirements you will need <em>before</em> applying for your zoning request. You will need to present these during the Zoning process.
          </Text>
          <Divider />
          <Spacer y={0.5} />
          <CheckboxGroup
            label="Requirements Checklist"
            value={groupSelected}
            onChange={setGroupSelected}
          >
            {card.requirements.map((reqs) => (
              <Checkbox key={zoningPrereqs[reqs].id} lineThrough value={zoningPrereqs[reqs].id}>
                {zoningPrereqs[reqs].name} <ZoningPrereqTips tip={zoningPrereqs[reqs].tip} />
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Card>
        <Spacer y={1} />
        <Card isHoverable variant={cardVariant()} borderWeight="bold" css={{ p: '10px' }}>
          <Row justify="center">
            <Checkbox isSelected={selected} onChange={setSelected} color="warning">
              I have read the requirements and acknowledge that I have completed/acquired them prior to my application
            </Checkbox>
          </Row>
        </Card>
      </Grid>
      <Grid css={{ p: '10px', w: '100%' }}>
        <Row justify="center">
          <ContinueButton category={cardCategoryText} selected={selected} cardlink={card.endpagelink} />
        </Row>
        <Row justify="center">
          <Text color="error" p>
            ** You will be required to login/register to our Customer Self-Service on the next page
          </Text>
        </Row>
        <Spacer y={2} />
        <Row justify="center">
          <Button auto size="sm" rounded ghost color="warning" onPress={() => navigate('/Assistant')}>
            Restart Assistant
          </Button>
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default zEndPage