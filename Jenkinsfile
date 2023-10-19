pipeline {
  agent any

  tools{
    // jdk "jdk18OCT"
    maven "maven3"
  }

  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

  }
}