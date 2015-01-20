module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: "dist/application.map",
				banner: "/* samrat more 2015 */\n"
			},
			target: {
				src: "dest/application.js",
				dest: "dist/application.min.js"
			}
		},
		jshint: {
			options: {
				jshintrc: ".jshintrc"
 			},
			target: {
				src: "src/*.js"
			}	

		},
		concat: {
			options: {
				serprator: ";",
				banner: "/* samrat more 2015 */\n"
			},
			target: {
				src: ["src/application.js","src/util.js",],
				dest: "dest/application.js"
			}
		},
		watch: {
			scripts: {
				files: ["src/*.js"],
				tasks: ["default"]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ['jshint', 'concat', 'uglify']);
};
