'use client';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import DatePicker from '../../components/DatePicker';
import { getFormat, transformDateValue } from '../../utils';
import withFieldWrap from '../../utils/withFieldWrap';

dayjs.extend(quarterOfYear);
const { RangePicker } = DatePicker;

const DateRange = ({ onChange, format, value, style, ...rest }: any) => {
  const dateFormat = getFormat(format);

  const valueObj = useMemo(() => {
    if (!value) {
      return value;
    }
    return value.map((item: any) => transformDateValue(item, format, dateFormat));
  }, [value]);

  const handleChange = (val: any[], _stringList: any[]) => {
    let stringList: any = _stringList;
    if (['week', 'quarter'].includes(format)) {
      stringList = (val || []).map((item: any) => dayjs(item).format(dateFormat));
    }

    const isPass = stringList.every((item: any) => !!item);

    if (!isPass) {
      stringList = null;
    }

    onChange(stringList);
  };

  let dateParams: any = {
    value: valueObj,
    style: { width: '100%', ...style },
    onChange: handleChange,
  };

  // TODO: format is a custom situation in options. Do you need to judge whether to showTime should be performed?
  if (format === 'dateTime') {
    dateParams.showTime = true;
  }

  if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
    dateParams.picker = format;
  }

  dateParams = { ...dateParams, ...rest };

  if (dateFormat === format) {
    dateParams.format = format;
  }

  return <RangePicker {...dateParams} />;
};

export default withFieldWrap(DateRange);
