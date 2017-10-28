const html = require('tram-one').html

const Tag = ({tagName, tagColor = '#66c'}) => `${tagName}${tagColor}`

Tag.args = ['tagName', 'tagColor']

module.exports = Tag
