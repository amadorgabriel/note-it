import 'styled-components'
import { darkTheme } from './dark' 

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: typeof darkTheme,
  }
}