// tslint:disable
// this is an auto generated file. This will be overwritten

export const mostCommon = `query MostCommon {
  mostCommon {
    data {
      items {
        id
        description
        cvss_score
        risk_score
        asset_count
        published
      }
    }
  }
}
`;
export const topremediations = `query Topremediations {
  topremediations {
    data {
      table {
        name
        timestamp
        labels
        data {
          title
          cvss_score
          riskscore
          exploits
          malware_kits
          asset_count
          asset_cnt_x_score
          affected_assets
        }
      }
    }
  }
}
`;

export const overview = `query Overview {
  topremediations {
    data {
      table {
        name
        timestamp
        labels
        data {
          title
          cvss_score
          riskscore
          exploits
          malware_kits
          asset_count
          asset_cnt_x_score
          affected_assets
        }
      }
    }
  }
  mostCommon {
    data {
      items {
        id
        description
        cvss_score
        risk_score
        asset_count
        published
      }
    }
  }
}
`;
