const cssCarouselStyles = {};

cssCarouselStyles.FlexCol = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  cursor: 'pointer',
};
cssCarouselStyles.FlexRow = {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
};
cssCarouselStyles.CrossButtonStyles = {
  alignSelf: 'flex-end',
  cursor: 'pointer',
};
cssCarouselStyles.LeftArrowButtonStyles = {
  alignContent: 'center',
  justifyContent: 'center',
  order: 1,
};
cssCarouselStyles.RightArrowButtonStyles = {
  justifyContent: 'center',
  order: 3,
};
cssCarouselStyles.MainSlide = {
  maxWidth: '650px',
  maxHeight: '480px',
  minWidth: '650px',
  minHeight: '480px',
};
cssCarouselStyles.ImageSlidePosition = {
  alignSelf: 'center',
  alignContent: 'center',
  order: 2,
};
cssCarouselStyles.SlideShowFlexBox = {
  alignSelf: 'center',
  order: 4,
};
cssCarouselStyles.SmallSlideStyles = {
  width: '100px',
  height: '67px',
};

export default cssCarouselStyles;
