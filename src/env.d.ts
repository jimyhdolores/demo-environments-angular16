interface ImportMeta {
	readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
	/**
	 * Built-in environment variable.
	 * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
	 */
	readonly NG_APP_ENV: string;
	// Add your environment variables below
	// readonly NG_APP_API_URL: string;
	[key: string]: any;
	readonly NG_APP_API: string;
}

// If your project references @types/node directly (in you) or indirectly (as in RxJS < 7.6.0),
// you might need to use the following declaration merging.
// declare namespace NodeJS {
//   export interface ProcessEnv {
//     readonly NG_APP_ENV: string;
//     // Add your environment variables below
//   }
// }
