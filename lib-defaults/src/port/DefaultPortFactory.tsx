import { AbstractModelFactory } from '@projectstorm/react-diagrams-core';
import { DefaultPortModel } from './DefaultPortModel';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}