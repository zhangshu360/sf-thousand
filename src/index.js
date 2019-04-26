export default (Vue) => {
  Vue.filter('thousand', (value) => {
    const parts = (`${value || value === 0 ? value : ''}`).split('.')
    if (parts.length) {
      parts[0] = parts[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1' + ',')
    }
    return parts.join('.')
  })
}
