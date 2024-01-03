import { FC } from 'react';
import { InputGroup } from '..';

// interface Props{
//     user: UserData;
// }

export const UpdateUserDataForm: FC = () => {
	//const [user, setUser] = useState<UserData>(user);

	return (
		<form className='flex flex-col items-center justify-center mx-auto'>
			<h1 className='text-3xl'>Alterar Dados</h1>
			{/* <InputGroup
                inputType='text'
                labelText='Nome: '
                labelFor='firstName'
                setValue={setUser}
                style='lightMode'
                value={user}
            /> */}
		</form>
	);
};
