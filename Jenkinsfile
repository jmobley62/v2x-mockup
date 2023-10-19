pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('maven version') {
      steps {
        sh '''cd /
cd Users/
ls'''
      }
    }

  }
}