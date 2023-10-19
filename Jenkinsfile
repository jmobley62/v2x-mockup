pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Build') {
      steps {
        sh '''mvn clean install
ls'''
      }
    }

  }
  tools {
    maven 'maven3'
  }
}