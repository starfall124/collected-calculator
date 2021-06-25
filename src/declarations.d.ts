declare module '*.png'
declare module '*.svg' {
  const content: string
  export default content
}
type ActionRedux = {
  type: string
  payload?: any
}
