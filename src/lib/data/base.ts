const firstName = 'Christopher';
const lastName = 'Chiechi';
const suffix = 'Creative';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
