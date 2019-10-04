import $ from 'jquery';

/**
 * @brief Attempts to login to the api.
 * 
 * @returns The response from the server.
 */
export default async function login(username: string, password: string): Promise<object>
{
	return await $.ajax({
		method: 'POST',
		url: '/api/login',
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