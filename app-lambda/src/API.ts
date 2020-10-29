/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type MostCommonQuery = {
  mostCommon:  {
    __typename: "AutogeneratedMostCommon",
    data:  {
      __typename: "DataMostCommon",
      items:  Array< {
        __typename: "Items",
        id: string | null,
        description: string | null,
        cvss_score: string | null,
        risk_score: number | null,
        asset_count: number | null,
        published: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type TopremediationsQuery = {
  topremediations:  {
    __typename: "AutogeneratedTopRemediations",
    data:  {
      __typename: "TableTopRemediations",
      table:  {
        __typename: "TableDataTopRemediations",
        name: string | null,
        timestamp: string | null,
        labels: Array< string | null > | null,
        data:  Array< {
          __typename: "DataTopRemediations",
          title: string | null,
          cvss_score: string | null,
          riskscore: string | null,
          exploits: string | null,
          malware_kits: string | null,
          asset_count: string | null,
          asset_cnt_x_score: string | null,
          affected_assets: string | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};

export type OverviewQuery = {
  topremediations:  {
    __typename: "AutogeneratedTopRemediations",
    data:  {
      __typename: "TableTopRemediations",
      table:  {
        __typename: "TableDataTopRemediations",
        name: string | null,
        timestamp: string | null,
        labels: Array< string | null > | null,
        data:  Array< {
          __typename: "DataTopRemediations",
          title: string | null,
          cvss_score: string | null,
          riskscore: string | null,
          exploits: string | null,
          malware_kits: string | null,
          asset_count: string | null,
          asset_cnt_x_score: string | null,
          affected_assets: string | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
  mostCommon:  {
    __typename: "AutogeneratedMostCommon",
    data:  {
      __typename: "DataMostCommon",
      items:  Array< {
        __typename: "Items",
        id: string | null,
        description: string | null,
        cvss_score: string | null,
        risk_score: number | null,
        asset_count: number | null,
        published: string | null,
      } | null > | null,
    } | null,
  } | null,
};
