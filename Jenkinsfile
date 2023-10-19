pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Builds') {
      steps {
        sh '''mvn clean install
cd Maven_Test/
ls'''
      }
    }

  }
  tools {
    maven 'maven3'
  }
}