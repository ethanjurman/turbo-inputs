const html = require('tram-one').html({
  CustomText: require('./CustomText')
})
const InputTransformWrapper = require('../inputModifiers/InputTransformWrapper')

const Punch = ({text, bg, fg}) => {
  const backgroundColor = bg || '#000'
  const foregroundColor = fg || '#ffddad'

  return html`
    <g>
      <g transform="translate(-9.233 -256.44) scale(.74256)" fill="${backgroundColor}" fill-rule="evenodd">
        <path d="M140.33 546.315c-49.266 24.56-83.778 41.258-88.913 66.085-8.13 39.3 27.635 57.674 156.2 235.502l82.907-58.875zm245.513-140.383c42.193-27.2 52.765-47.952 90.4-28.85 21.546 10.938 23.16 56.854 83.43 162.732l-73.496 40.036zM422.77 737.73l121.357-67.288 15.62 32.442-323.215 200.658s28.837 39.65 61.278 43.255c32.442 2.403 55.27-28.837 75.698-13.217 31.24 27.636 32.44 51.667 70.89 55.27 30.04 0 161.008-70.89 167.015-116.55 6.008-30.037-10.814-49.262-22.83-84.107 0 0 45.66-22.83 46.86-55.27-4.805-85.31-3.603-78.1-9.61-156.2-34.846-50.466-68.49 8.41-237.907 98.525z" stroke="${backgroundColor}" stroke-width="47.579" stroke-linejoin="round"/>
        <circle cx="374.709" cy="692.997" r="295.596"/>
      </g>
      <g fill="${foregroundColor}" fill-rule="evenodd" stroke="#000" stroke-width="11.895" stroke-linejoin="round">
        <path d="M94.1373 149.3017c-36.5838 18.2373-62.212 30.6366-66.0242 49.0722-6.037 29.1826 18.7364 44.6108 114.204 176.66l65.1323-41.043zM276.446 45.0587c31.3302-20.1978 39.1798-35.6075 67.1254-21.423 16.0007 8.122 17.1992 42.2176 61.952 120.8386l-54.5746 29.7292zm-166.9948 98.5616l67.1276-40.1592 76.227 129.7614-1.8215 23.7152 20.4843 34.4215-51.8234 32.2644zm82.085-47.7333l70.695-41.052 70.8745 130.654-68.8504 36.8667z" stroke-width="8.832751199999999"/>
        <path d="M303.8094 290.2727l90.1137-49.9648 11.599 24.09-240.0074 149.0012s21.4133 29.4426 45.5042 32.1203c24.0887 1.785 41.0414-21.4133 56.209-9.8137 23.1977 20.5207 24.0902 38.3652 52.6403 41.0414 22.3066 0 119.5585-52.6403 124.02-86.5457 4.4612-22.305-8.0302-36.58-16.9528-62.4547 0 0 33.9054-16.9527 34.7964-41.0414-3.568-63.348-2.6762-57.9956-7.1375-115.9897-25.8737-37.4734-50.8565 6.245-176.6592 73.1624z" stroke-width="8.832751199999999"/>
      </g>
      <CustomText text="${text || ''}" y='180' x='-100' font='1.5' />
    </g>
  `
}

module.exports = InputTransformWrapper(Punch)
