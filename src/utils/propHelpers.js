export function requiredHex(props, propName, componentName) {
  if (!props.colour) {
    return new Error(`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`${props[propName]}\``);
  }

  if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(props.colour)) {
    return new Error(`Invalid prop \`${propName}\` of value \`${props[propName]}\` supplied to \`${componentName}\`, expected \`hex colour\``)
  }
}