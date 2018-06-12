const cssCarouselHelper = {};

cssCarouselHelper.FlexCol = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  cursor: 'pointer',
};
cssCarouselHelper.FlexRow = {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
};
cssCarouselHelper.CrossButtonStyles = {
  alignSelf: 'flex-end',
  cursor: 'pointer',
};
cssCarouselHelper.LeftArrowButtonStyles = {
  alignContent: 'center',
  justifyContent: 'center',
  order: 1,
};
cssCarouselHelper.RightArrowButtonStyles = {
  justifyContent: 'center',
  order: 3,
};
cssCarouselHelper.MainSlide = {
  maxWidth: '650px',
  maxHeight: '480px',
  minWidth: '650px',
  minHeight: '480px',
};
cssCarouselHelper.ImageSlidePosition = {
  alignSelf: 'center',
  alignContent: 'center',
  order: 2,
};
cssCarouselHelper.SlideShowFlexBox = {
  alignSelf: 'center',
  order: 4,
};
cssCarouselHelper.SmallSlideStyles = {
  width: '100px',
  height: '67px',
};

export default cssCarouselHelper;
