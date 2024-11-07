let profile =  {
    user: {
        "cryptoPath": "../../scholarship_project/organizations/peerOrganizations/user.scholarship.com", 
		"keyDirectoryPath": "../../scholarship_project/organizations/peerOrganizations/user.scholarship.com/users/User1@user.scholarship.com/msp/keystore/",
        "certPath":     "../../scholarship_project/organizations/peerOrganizations/user.scholarship.com/users/User1@user.scholarship.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../scholarship_project/organizations/peerOrganizations/user.scholarship.com/peers/peer0.user.scholarship.com/tls/ca.crt",
		"peerEndpoint": "localhost:7051",
		"peerHostAlias":  "peer0.user.scholarship.com",
        "mspId": "userMSP"
    },
    university: {
        "cryptoPath": "../../scholarship_project/organizations/peerOrganizations/university.scholarship.com", 
		"keyDirectoryPath": "../../scholarship_project/organizations/peerOrganizations/university.scholarship.com/users/User1@university.scholarship.com/msp/keystore/",
        "certPath":     "../../scholarship_project/organizations/peerOrganizations/university.scholarship.com/users/User1@university.scholarship.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../scholarship_project/organizations/peerOrganizations/university.scholarship.com/peers/peer0.university.scholarship.com/tls/ca.crt",
		"peerEndpoint": "localhost:9051",
		"peerHostAlias":  "peer0.university.scholarship.com",
        "mspId": "universityMSP"
    },
    govAgency :{
        "cryptoPath": "../../scholarship_project/organizations/peerOrganizations/govAgency.scholarship.com", 
		"keyDirectoryPath": "../../scholarship_project/organizations/peerOrganizations/govAgency.scholarship.com/users/User1@govAgency.scholarship.com/msp/keystore/",
        "certPath":     "../../scholarship_project/organizations/peerOrganizations/govAgency.scholarship.com/users/User1@govAgency.scholarship.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../scholarship_project/organizations/peerOrganizations/govAgency.scholarship.com/peers/peer0.govAgency.scholarship.com/tls/ca.crt",
		"peerEndpoint": "localhost:11051",
		"peerHostAlias":  "peer0.govAgency.scholarship.com",
        "mspId": "govAgencyMSP"
    },
    scholarshipProvider: {
        "cryptoPath": "../../scholarship_project/organizations/peerOrganizations/scholarshipProvider.scholarship.com", 
		"keyDirectoryPath": "../../scholarship_project/organizations/peerOrganizations/scholarshipProvider.scholarship.com/users/User1@scholarshipProvider.scholarship.com/msp/keystore/",
        "certPath":     "../../scholarship_project/organizations/peerOrganizations/scholarshipProvider.scholarship.com/users/User1@scholarshipProvider.scholarship.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../scholarship_project/organizations/peerOrganizations/scholarshipProvider.scholarship.com/peers/peer0.scholarshipProvider.scholarship.com/tls/ca.crt",
		"peerEndpoint": "localhost:11151",
		"peerHostAlias":  "peer0.scholarshipProvider.scholarship.com",
        "mspId": "scholarshipProviderMSP"
    },
}
module.exports = { profile }