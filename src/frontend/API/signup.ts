import $ from 'jquery';

/**
 * @brief Calls the signup api to register a new account.
 */
export default async function signup(username: string, password: string): Promise<object>
{
	return await $.ajax({
		method: 'POST',
		url: '/api/signup',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify({
			username: username,
			password: password
		})
	}).then((data: any) => {
		return data;
	});
}