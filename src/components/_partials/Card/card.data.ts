export const CARD_FIELDS = `
  fragment CardFields on ContentNode_Components_Components_Card {
    fieldGroupName
    text
    title
    image {
      altText
      sourceUrl
      mediaDetails {
        height
        width
      }
    }
  }
`;
