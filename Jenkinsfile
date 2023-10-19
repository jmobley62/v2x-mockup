pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Build with Maven') {
      steps {
        script {
          docker.image('maven:3.8.3').inside() {
            sh 'mvn clean install'
          }
        }
      }
    }

  }
}