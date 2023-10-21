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
            sh 'npm instal -gï¿½'
          }
        }

      }
    }

    stage('Sonar') {
      steps {
        withSonarQubeEnv('sonar3') {
          sh 'npm install -g sonarqube-scanner'
        }

      }
    }

    stage('Docker') {
      steps {
        sh '''sudo su -

// Build the Docker image
docker build -t ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} .




// Push the Docker image to the registry
docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}'''
      }
    }

  }
  tools {
    jdk 'jdk3'
    maven 'maven3'
    nodejs 'node3'
  }
}