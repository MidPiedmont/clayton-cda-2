export interface zoningPrereq {
    id: number;
    name: string;
    tips: {tip: string}[];
    buttons: {label: string, link: string}[];
}

export const zoningPrereqs: zoningPrereq[] = [
    {
        id: 0, 
        name: 'Letter of Intent', 
        tips: [{tip: "Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request."}],
        buttons: [],
    },
    {
        id: 1, 
        name: 'Site Plan or Survey', 
        tips: [{tip: "Optional, but preferrable to have."}],
        buttons: []
    },
    {
        id: 2, 
        name: 'Pre-Application Meeting', 
        tips: [{tip: "Most Zoning requests and processes require an initial meeting with county zoning staff to better understand your zoning request and determine the best course of action."}],
        buttons: [{label: "Pre-Application Meeting Requirements", link: "/ZoningRequirements/0"}]
    },
    {   // Specific to Conditional-Use
        id: 3, 
        name: 'Letter of Intent', 
        tips: [{tip: "Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request. The ways in which the conditional use shall comply with the applicable development standards of this Ordinance. The ways in which the conditional use shall be consistent with the decision criteria described by Section 13.10 of this Ordinance. Any written commitments being made by the applicant."}],
        buttons: []
    },
    {  
        id: 4, 
        name: 'Property Owner Authorization or Special Power of Attorney Affidavit', 
        tips: [],
        buttons: [
            {label: "Download Property Owner Authorization Form", link: "https://www.claytoncountyga.gov/download/98/forms/29618/property-owner-authorization-form.pdf"}, 
            {label: "Download Special Power of Attorney Form", link: "https://www.claytoncountyga.gov/download/98/forms/29619/special-power-of-attorney-affidavit-form.pdf"}
        ]
    },
    {
        id: 5, 
        name: 'Notarized Campaign Disclosure Form', 
        tips: [],
        buttons: [{
            label: "Download Form", 
            link: "https://www.claytoncountyga.gov/download/98/forms/29617/campaign-disclosure-form.pdf"
        }]
    },
    {
        id: 6, 
        name: 'Property Deed', 
        tips: [
            {tip: "This is required if county records do not reflect the applicant as current owner"}, 
            {tip: "You can request a copy of your deed from the Georgia Superior Court Clerks' Cooperative Authority"}
        ],
        buttons: [{label: "GSCCCA Website", link: "https://www.gsccca.org/"}]
    },
    {
        id: 7, 
        name: 'Location/Vicinity Map', 
        tips: [{tip: "A location map showing and clearly identifying the subject property and showing all land within 1 mile of the subject property. The location map should identify the current zoning and use of all property within 1,320 feet of the subject property."}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM"}]
    },
    {
        id: 8, 
        name: 'Survey of the Subject Property', 
        tips: [{tip: "Read Section 13.5(E)(6) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM"}]
    },
    {
        id: 9, 
        name: 'Site Plan', 
        tips: [{tip: "Read Section 13.5(E)(7) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM"}]
    },
    {
        id: 10, 
        name: 'Sewer/Septic Letter', 
        tips: [{tip: "Read Section 13.16(A)(3) for details:"}],
        buttons: [
            {label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.16COUSPRCU"}, 
            {label: "Link to CCPH Website", link: "https://www.claytoncountypublichealth.org/"}, 
            {label: "Link to CCWA Website", link: "https://www.ccwa.us/"}
        ]
    },
    {
        id: 11, 
        name: 'Building Elevations', 
        tips: [{tip: "Elevations must show height of building and finish materials and façade of each side of building. Read the details for the Zoning District that applies to the development for details on finish materials."}],
        buttons: [{label: "Link to Zoning Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO"}]
    },
    {
        id: 12, 
        name: 'Approval of PUD Concept Plan ', 
        tips: [],
        buttons: [{label: "PUD Concept Plan Requirements", link: "/ZoningRequirements/9"}]
    },
    {
        id: 13, 
        name: 'Detailed Development Plan Data', 
        tips: [{tip: "Read Section 7.11(B) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.11DEDEPLFIRE"}]
    },
    {
        id: 14, 
        name: 'Preliminary Plat', 
        tips: [],
        buttons: [{label: "Preliminary Plat Request Requirements", link: "/ZoningRequirements/16"}]
    },
    {
        id: 15, 
        name: 'Conceptual Site Plan Data', 
        tips: [{tip: "Read Section 7.10(B) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE"}],
    },
    {   // Specific to PUD Concept
        id: 16, 
        name: 'Location/Vicinity Map', 
        tips: [{tip: "Read Section 7.10(A)(1 and 2) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE"}]
    },
    {
        id: 17, 
        name: 'Survey of the Subject Property', 
        tips: [{tip: "Read Section 13.5(E)(6) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM"}],
    },
    {
        id: 18, 
        name: 'Proposed Lot Combination Survey (Before and After Survey)', 
        tips: [],
        buttons: []
    },
    {
        id: 19, 
        name: 'Proposed Lot Line Adjustment Survey (Before and After Survey)', 
        tips: [],
        buttons: []
    },
    {
        id: 20, 
        name: 'Proposed Minor Subdivision Plat (Before and After Survey)', 
        tips: [],
        buttons: []
    },
    {
        id: 21, 
        name: 'Copy of comments received from Local Utility Providers', 
        tips: [{tip: "At a minimum, the subdivider shall provide an affidavit indicating that a copy of the proposed preliminary plat has been provided to all appropriate local utilities."}],
        buttons: []
    },
    {
        id: 22, 
        name: 'Building Elevations', 
        tips: [{tip: "Elevations must show height of building and finish materials and façade of each side of building. Read the details for the Zoning District that applies to the development for details on finish materials."}],
        buttons: [{label: "Link to Zoning Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO"}],
    },
    {
        id: 23, 
        name: 'Survey', 
        tips: [],
        buttons: [],
    },
    {
        id: 24, 
        name: 'Proposed Preliminary Plat', 
        tips: [
            {tip: "Must be prepared by a land surveyor or professional engineer and certified by a land surveyor registered by the state and provide items identified in Chapter 86, Section 86-123."},
            {tip: "Read Chapter 86, Section 86-123 for details:"}
        ],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-123SPPRPLDOBESU"}]
    },
    { // Subdivision and Combination Specific
        id: 25, 
        name: 'Property Owner Authorization (if Applicant is not the Property Owner)', 
        tips: [],
        buttons: [{label: "Download Property Owner Authorization Form", link: "https://www.claytoncountyga.gov/download/98/forms/29618/property-owner-authorization-form.pdf"}]
    },
    {
        id: 26, 
        name: 'The original documents and the specified number of copies of the maintenance bonds or surety required by this article for all public improvements', 
        tips: [{tip: "Read Chapter 86, Section 127 for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-127FIPLAPREPR"}]
    },
    {
        id: 27, 
        name: '"As-built" drawings showing the location, dimensions, and materials used to construct all improvements within the subdivision', 
        tips: [{tip: "Read Chapter 86, Section 127 for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-127FIPLAPREPR"}]
    },
    {
        id: 28, 
        name: 'Map showing the locations of all street signs, street lights, and fire hydrants', 
        tips: [{tip: "Read Chapter 86, Section 127 for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-127FIPLAPREPR"}]
    },
    {
        id: 29, 
        name: '', 
        tips: [],
        buttons: []
    },
    {
        id: 30, 
        name: 'Property Owner Authorization', 
        tips: [],
        buttons: [{label: "Download Property Owner Authorization Form", link: "https://www.claytoncountyga.gov/download/98/forms/29618/property-owner-authorization-form.pdf"}]
    },
    {
        id: 31, 
        name: 'Proposed Preliminary Plat', 
        tips: [{tip: "Read Section 11.4(C)(1) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 32, 
        name: 'Survey of the Subject Property', 
        tips: [{tip: "Read Section 11.4(C)(2) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 33, 
        name: 'Site Development Plan', 
        tips: [{tip: "Read Section 11.4(C)(3) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 34, 
        name: 'Landscaping Plan', 
        tips: [{tip: "Read Section 11.4(C)(4) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 35, 
        name: 'Tree Protection and Replacement Plan', 
        tips: [{tip: "Read Chapter 86, Section 73 for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIITRPR_S86-73TRPRREST"}],
    },
    {
        id: 36, 
        name: 'Lighting Plan', 
        tips: [{tip: "Read Section 11.4(C)(5) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 37, 
        name: 'Sign Plan', 
        tips: [{tip: "Read Section 11.4(C)(6) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 38, 
        name: 'Site Drainage Plan', 
        tips: [{tip: "Read Section 11.4(C)(7) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {
        id: 39, 
        name: 'Construction Plan', 
        tips: [{tip: "Read Section 11.7 for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.7SPCOPLDOBESU"}]
    },
    {
        id: 40,
        name: 'Subdivision Construction Plans',
        tips: [
            {tip: "Shall be prepared by a land surveyor or professional engineer and certified by a land surveyor registered by the state and provide items identified in Chapter 86, Section 125."},
            {tip: "Read Chapter 86, Section 125 for details:"}
        ],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-125SPCOPLDOBESU"}]
    },
    {
        id: 41,
        name: 'Site Photos of the Trees being removed',
        tips: [],
        buttons: []
    },
    {
        id: 42,
        name: 'Map of the Area',
        tips: [{tip: "Must show the location of the tract to be harvested and, as to those trucks which will be traveling to and from such tract for purposes of picking up and hauling loads of cut forest products, the main point of ingress to such tract from a public road and, if different, the main point of egress from such tract to a public road. If multiple points of ingress and/or ingress will be used, all such points shall be identified."}],
        buttons: []
    },
    {
        id: 43,
        name: 'Statement of Sale Method',
        tips: [{tip: "A statement as to whether the timber will be removed pursuant to a lump sum sale, per unit sale, or owner harvest for purposes of ad valorem taxation under O.C.G.A. § 48-5-7.5."}],
        buttons: []
    },
    {
        id: 44,
        name: "Timber Seller's Contact Information",
        tips: [{tip: "The name, address, and daytime telephone number of the timber seller if the harvest is pursuant to a lump sum or per unit sale or of the timber owner if the harvest is an owner harvest."}],
        buttons: []
    },
    {
        id: 45,
        name: "Timber Harvester's Contact Information",
        tips: [{tip: "The name, business address, business telephone number, and nighttime or emergency telephone number of the person or firm harvesting such timber."}],
        buttons: []
    },
    {
        id: 46,
        name: '$5,000 Bond or Letter of Credit',
        tips: [{tip: "Read Chapter 86, Section 72 for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIITRPR_S86-72TIHA"}]
    },
    { // Specific to Admin Appeal
        id: 47, 
        name: 'Letter of Intent', 
        tips: [{tip: "Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request. A letter describing the reasons for the appeal noting specific sections of this Ordinance, Georgia State Code, or other standard applicable to Clayton County upon which the appeal is based."}],
        buttons: []
    },
    {
        id: 48, 
        name: 'All Initial Materials Submitted to the County', 
        tips: [{tip: "Copies of all materials submitted to the County's staff member or administrative board upon which the decision being appealed was based."}],
        buttons: []
    },
    {
        id: 48, 
        name: 'Copies of any written decisions which are the subject of the appeal', 
        tips: [],
        buttons: []
    },
    { // Specific to Variance
        id: 50, 
        name: 'Letter of Intent', 
        tips: [{tip: "Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request. describing the details of the variance being requested and stating how the request is consistent with the required findings of fact described by Section 10.8 of this Ordinance. The letter should include any written commitments being made by the petitioner."}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART10BOCO_S10.8DESTVA"}]
    },
    {
        id: 51, 
        name: 'Survey of the Subject Property showing the existing conditions', 
        tips: [],
        buttons: []
    },
    { // Specific to Variance
        id: 52, 
        name: 'Proposed Site Plan',
        tips: [{tip: "Must clearly show the entire layout of the property and all features relevant to the variance request. "}],
        buttons: []
    },
    {   // Specific to PUD Concept
        id: 53, 
        name: 'Sewer/Septic Letter', 
        tips: [{tip: "Read Section 7.10(A)(3) for details:"}],
        buttons: [
            {label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE"}, 
            {label: "Link to CCPH Website", link: "https://www.claytoncountypublichealth.org/"}, {label: "Link to CCWA Website", link: "https://www.ccwa.us/"},
            {label: "Link to CCWA Website", link: "https://www.ccwa.us/"}
        ]
    },
    {   // Specific to PUD
        id: 54, 
        name: 'Location/Vicinity Map', 
        tips: [{tip: "Read Section 7.11(A)(1 and 2) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.11DEDEPLFIRE"}]
    },
    {   // Specific to PUD
        id: 55, 
        name: 'Sewer/Septic Letter', 
        tips: [{tip: "Read Section 7.11(A)(3) for details:"}],
        buttons: [
            {label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE"}, 
            {label: "Link to CCPH Website", link: "https://www.claytoncountypublichealth.org/"}, {label: "Link to CCWA Website", link: "https://www.ccwa.us/"},
            {label: "Link to CCWA Website", link: "https://www.ccwa.us/"}
        ]
    },
    {
        id: 56, 
        name: 'Proposed Final Plat', 
        tips: [
            {tip: "Must be prepared by a land surveyor or professional engineer and certified by a land surveyor registered by the state and provide items identified in Chapter 86, Section 128."},
            {tip: "Read Chapter 86, Section 128 for details:"}
        ],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-128SPFIPLDOBESU"}]
    },
    {   // Specific to Site Development
        id: 57, 
        name: 'Location/Vicinity Map', 
        tips: [{tip: "Read Section 11.4(C)(1) for details:"}],
        buttons: [{label: "Link to Relevant Ordinance", link: "https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST"}]
    },
    {   // Specific to Site Development
        id: 58, 
        name: 'Future Land Use Plan Amendment Supplemental Application', 
        tips: [{tip: "For proposed land use changes, a Future Land Use Plan Amendment Supplemental is required."}],
        buttons: [{label: "Link to Future Land Use Plan Amendment Supplemental Application", link: "https://form.jotform.com/241793737729068"}]
    }
];