import {ColorValue, TextProps, TextStyle} from 'react-native';
import {TelkomTextType} from './Text.preset';
export interface BaseProps extends TextProps {
  /**
   * Size of font size.
   * @default "12"
   * @type number | string
   * @memberof BaseProps
   * @example
   * <TelkomText size={16}>Some text</TelkomText>
   * <TelkomText size="16">Some text</TelkomText>
   **/
  fontSize?: number | string;

  /**
   * Font Weight of the Text.
   * @default "normal"
   * @type "normal" | "semiBold" | "bold" | "extraBold"
   * @memberof BaseProps
   * @example
   * <TelkomText fontWeight="normal">Some text</TelkomText>
   * **/

  fontWeight?: 'normal' | 'semiBold' | 'bold' | 'extraBold';

  /**
   *  The purpose of text component.
   *  To Select Fixed Style of text.
   * @memberof BaseProps
   * @example
   * <TelkomText textType="body">Some text</TelkomText>
   * **/
  textType?: TelkomTextType;

  /**
   * Set Color of the text manually.
   * @memberof ColorValue React Native
   * @example
   * <TelkomText color="#343A40">Some text</TelkomText>
   * **/
  fontColors?: ColorValue;

  /**
   * set text line height manually
   * @example
   * <TelkomText lineHeight={20}>Some text</TelkomText>
   * **/
  fontLineHeight?: number;

  /**
   * To set text style based on React Native Text Props
   * @memberof TextStyle
   * <TelkomText style={{numberOfLines: 1}}>Some text</TelkomText>
   */
  style?: TextStyle;

  /**
   * To Debug Style output in console
   */
  debug?: boolean;
}
