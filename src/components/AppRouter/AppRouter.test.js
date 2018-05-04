import React from 'react';
import AppRouter from './AppRouter';

import { shallow } from 'enzyme';

describe('Компонент AppRouter', () => {
	const wrapper = shallow(<AppRouter />);

	describe('Проверить наличие:', () => {
		it('Содержит компонент Switch', () => {
			const Switch = wrapper.find('Switch');
			expect(Switch).toHaveLength(1);
		});
	});
});