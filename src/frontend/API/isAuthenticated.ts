import $ from 'jquery';

/**
 * @brief Checks if the user has a valid API token or not.
 */
export default async function isAuthenticated(callback: (success: boolean) => any)
{
	await $.ajax({
		method: 'GET',
		url: '/api/verifyAuth',
		error: (jqXHR, textStatus, errorThrown) => {
			callback(false);
		},
		success: (data) => {
			callback(data.authenticated || false);
		}
	})
}