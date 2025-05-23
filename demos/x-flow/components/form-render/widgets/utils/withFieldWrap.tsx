const getProps = (props: any, filter: any[]) => {
  const result: any = {};

  Object.keys(props).forEach((key: any) => {
    if (filter.includes(key)) {
      return;
    }
    result[key] = props[key];
  });

  return result;
};

export default (Field: any, filterProps = ['addons', 'schema', 'dependValues']) => {
  return (props: any) => {
    return <Field {...getProps(props, filterProps)} />;
  };
};
