import 'styled-components';
import { type Theme } from '@constants';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
