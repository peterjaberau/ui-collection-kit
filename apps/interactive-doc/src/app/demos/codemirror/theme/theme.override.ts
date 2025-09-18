import { createStyles } from 'antd-style';

export const useStyle = createStyles(({ prefixCls, css, token }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
  card: css`
        &.${prefixCls}-card {
            .ant-card-head {
                border-bottom: none;
                min-height: initial;
                padding-top: ${token.paddingLG}px;
            }
        }
    `
}));
