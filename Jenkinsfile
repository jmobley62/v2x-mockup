pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('builds') {
      steps {
        sh 'mvn -v'
      }
    }

  }
  tools {
    maven 'maven3'
  }
}