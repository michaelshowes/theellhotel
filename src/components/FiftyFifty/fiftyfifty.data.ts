export const FIFTY_FIFTY_FIELDS = `
  fragment FiftyFiftyFields on ContentNode_Components_Components_FiftyFifty {
    fieldGroupName
    title
    text
    image {
      altText
      sourceUrl
      mediaDetails {
        width
        height
      }
    }
  }
`;
