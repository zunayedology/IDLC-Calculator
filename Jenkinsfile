pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Replace 'NodeJS' with your NodeJS installation name in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/zunayedology/idlc-calculator.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'C:/ProgramData/Jenkins/.jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarScanner/bin/sonar-scanner.bat'
                }
            }
        }
    }
}