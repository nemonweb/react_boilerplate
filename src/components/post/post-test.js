/* global expect */

import React from 'react';
import { shallow } from 'enzyme';

import Post from './post';
import styles from './post.css';

describe('<Post />', () => {
  it('contains a empty class when "pic" props is not transferred', () => {
    const wrapper = shallow(<Post title="test" desc="desc" />);
    expect(
      wrapper.contains(<div className={styles.empty} />)
    ).to.equal(true);
  });
  it('contains a images class when "pic" props is transferred', () => {
    const pic = 'pic';
    const wrapper = shallow(<Post title="test" desc="desc" pic={pic} />);
    expect(
      wrapper.contains(<img className={styles.img} src={pic} />)
    ).to.equal(true);
  });
});
