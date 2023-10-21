pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Installs') {
      parallel {
        stage('Maven') {
          steps {
            sh '''mvn clean install
'''
          }
        }

        stage('NodeJS') {
          steps {
            sh 'npm instal -g�'
          }
        }

      }
    }

    stage('Maven build') {
      steps {
        sh '''mvn package
ls'''
      }
    }

  }
  tools {
    jdk 'jdk3'
    maven 'maven3'
    nodejs 'node3'
  }

  environment {
    // Define environment variables for SonarScanner
    SONAR_SCANNER_HOME = '/path/to/sonar-scanner'
    PATH = "${env.PATH}:${SONAR_SCANNER_HOME}/bin"
    
    // Define environment variables for Docker
    DOCKER_REGISTRY = 'your-docker-registry'
    DOCKER_IMAGE_NAME = 'your-image-name'
    DOCKER_IMAGE_TAG = 'latest' // You can set the desired tag
  }
}