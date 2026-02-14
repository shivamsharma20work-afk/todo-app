pipeline{
    agent any

    stages{
        stage('Code') {
            steps{
                git url: "https://github.com/shivamsharma20work-afk/todo-app.git", branch: "main"
                sh 'whoami'

            }
        }
        stage('Build backend') {
            steps{
                sh 'docker build -t todo-backend ./backend'
            }
        }
        stage('Build frontend') {
            steps{
                sh 'docker build -t todo-frontend ./frontend'
            }
        }
        stage('Test') {
            steps{
                echo 'Testing the code'
            }
        }
        stage('Deploy') {
            steps{
                sh 'docker run -d -p 5000:5000 todo-backend'
                sh 'docker run -d -p 3000:3000 todo-frontend'
            }
        }
    }
}