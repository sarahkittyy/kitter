import $ from 'jquery';

/**
 * @brief Calls the logout api, dissociating the API tokens.
 */
export default async function logout(): Promise<object>
{
	return await $.ajax({
		method: 'POST',
		url: '/api/logout',
		dataType: 'json'
	}).then((data: any) => {
		return data;
	});
}