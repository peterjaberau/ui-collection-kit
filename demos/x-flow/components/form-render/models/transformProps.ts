const displayTypeEnum: any = {
  column: 'vertical',
  row: 'horizontal',
  inline: 'inline',
};

const transformProps = (props: any) => {
  const {
    schema,
    beforeFinish,
    onMount,
    displayType = 'column',
    watch,
    removeHiddenData = true,
    readOnly,
    column = 1,
    mapping,
    debugCss,
    local,
    configProvider,
    validateMessages,
    debug,
    id,
    labelWidth,
    maxWidth,
    form,
    onFinish,
    onFinishFailed,
    footer,
    operateExtra,
    logOnMount,
    logOnSubmit,
    labelCol,
    fieldCol,
    disabled,
    className,
    validateTrigger,
    antdVersion,
    ...otherProps
  } = props;

  const formProps = {
    ...otherProps,
  };

  if (displayType) {
    formProps.layout = displayTypeEnum[displayType] || 'horizontal';
  }

  return {
    formProps,
    schema,
    displayType,
    onFinish,
    beforeFinish, // form does not have this API, I feel like I can't find the timing
    onMount,
    watch,
    readOnly,
    disabled,
    column,
    mapping,
    debugCss, // seems to be useless
    local,
    configProvider,
    footer,
    form,
    labelWidth,
    validateMessages,
    debug, // Is it still useful if it is changed to form?
    id,
    onFinishFailed,
    removeHiddenData,
    operateExtra,
    logOnMount,
    logOnSubmit,
    labelCol,
    fieldCol,
    maxWidth,
    className,
    validateTrigger,
    antdVersion,
  };
};

export default transformProps;
