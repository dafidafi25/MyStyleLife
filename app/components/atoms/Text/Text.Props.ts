import {ColorValue, TextProps, TextStyle} from 'react-native';
import {TextType} from './Text.preset';
export interface BaseProps extends TextProps {
  /**
   * Size of font size.
   * @default "12"
   * @type number | string
   * @memberof BaseProps
   * @example
   * <Text size={16}>Some text</Text>
   * <Text size="16">Some text</Text>
   **/
  fontSize?: number | string;

  /**
   * Font Weight of the Text.
   * @default "normal"
   * @type "normal" | "semiBold" | "bold" | "extraBold"
   * @memberof BaseProps
   * @example
   * <Text fontWeight="normal">Some text</Text>
   * **/

  fontWeight?: 'normal' | 'semiBold' | 'bold' | 'extraBold';

  /**
   *  The purpose of text component.
   *  To Select Fixed Style of text.
   * @memberof BaseProps
   * @example
   * <Text textType="body">Some text</Text>
   * **/
  textType?: TextType;

  /**
   * Set Color of the text manually.
   * @memberof ColorValue React Native
   * @example
   * <Text color="#343A40">Some text</Text>
   * **/
  fontColors?: ColorValue;

  /**
   * set text line height manually
   * @example
   * <Text lineHeight={20}>Some text</Text>
   * **/
  fontLineHeight?: number;

  /**
   * To set text style based on React Native Text Props
   * @memberof TextStyle
   * <Text style={{numberOfLines: 1}}>Some text</Text>
   */
  style?: TextStyle;

  /**
   * To Debug Style output in console
   */
  debug?: boolean;
}
