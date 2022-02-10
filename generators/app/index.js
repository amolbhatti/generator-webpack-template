const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  welcome() {
    this.log("Welcome webpack template generator!");
  }

  writing() {
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js")
    );
    this.fs.copy(
      this.templatePath("package-lock.json"),
      this.destinationPath("package-lock.json")
    );
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
  }

  end() {
    this.log(" ");
    this.log("Finished generating! type npm start and you are ready to go");
    this.log(" ");
  }
};
