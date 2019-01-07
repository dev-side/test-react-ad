import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render () {
    return (
      <ins className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1210513154037837"
      data-ad-slot="1581381070"
      data-ad-format="auto"
      data-ad-test="on" />
      );
  }
}