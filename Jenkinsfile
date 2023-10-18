pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Maven install') {
      steps {
        sh '''                   // Download and extract Apache Maven
                    sh \'\'\'
                        wget http://apache.mirror.gtcomm.net/maven/maven-3/3.8.4/binaries/apache-maven-3.8.4-bin.tar.gz
                        tar -xzf apache-maven-3.8.4-bin.tar.gz
                    \'\'\'
                    // Set Maven environment variables
                    env.MAVEN_HOME = "${workspace}/apache-maven-3.8.4"
                    env.PATH = "${env.MAVEN_HOME}/bin:${env.PATH}"'''
      }
    }

  }
}