# file-upload-node
A simple node server to upload file content on your compute resource.

## Installation:
- Spin up a compute instance on your preferred cloud provider.  
  **NOTE** : My favourite is *GCP compute* (there's lot of competition in market you know)
- Download the **.pem** key for your compute resource and name it **login-compute.pem**
- Grant sufficient permissions to your pem key file
```bash
  sudo chmod 600 login-compute.json
```
- *( Linux only )* Login into your compute instance as shown below:
```bash
  ssh -i login-compute.json <user_uid>@<external_ip_addr>
  # 'user_uid' variable might be something like 'db2_user' (EC2)
  # or something similar to compute instance name.
  # (Depends on your cloud provider, so not sure here)
```
- Well, after successful login, follow the steps mentioned below.

## Steps:
- Install **npm** and **node** over your cloud instance.
- Clone the repository:
```bash
  git clone https://github.com/Accelerator-One/file-upload-node.git
```
- Install the dependencies:
```bash
  npm install
```
- Execute following commands sequentially : ( directory for file upload )
```bash
  cd file-upload-node
  mkdir upload
  chmod 777 upload
  # fine grain permissions as per your needs
```
- Run the server:
```bash
  node index.js
```
<br/>

## Caution:  
- This is just a sample demonstration running on **http** for demonstration purposes.
- Allow **http** and **https** traffic in the options (as per your cloud provider)
- Set this application over [apache web-server](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview) and expose port **8080** (or other port as per your convenience) if you are using it for development purposes.
- Be mindful to the public ingress you're allowing to your compute instance.
- Also, don't forget to shutdown your instance after successfully testing this application to avoid additional traffic.
- Exit the session using `exit` in the shell environment.

\* In case you face any *problems* or find any *errors*, mark them under **Issues** section of this repository.
