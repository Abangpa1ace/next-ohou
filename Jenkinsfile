pipeline {
  agent any
    tools {nodejs "21.0.0"}
      stages {
        stage("Build") {
          steps {
            sh "npm install"
            sh "npm run build"
          }
        }
      }
}


// pipeline {
//     agent any
    
//     stages {
        
//         stage('github-clone') {
//             steps {
//                 git branch: 'main', credentialsId: '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', url: 'https://github.com/Abangpa1ace/next-ohou.git'
//             }
//         }
        
//    		stage("sonarqube") {
//                     steps{
//                         script{
//                         def scannerHome = tool 'sonarqube-scanner';
//                         withSonarQubeEnv(credentialsId:"SONAR_TOKEN",installationName:'sonarqube') {
//                         sh "${scannerHome}/bin/sonar-scanner"
//                     }
//                 }
//                     }
//       }
//   }
// }