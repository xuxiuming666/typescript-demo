1.npm init -y: ����package.json�ļ�
2.tsc --init�� ����tsconfig.json�ļ�
3.��ts-node��typescript��װ����Ŀ������-D
4.����������npm run dev
5.����������npm run build,����tsconfig.json�н�outDir: "./build",
�������Խ�����ɵ�js�ļ�ͳһ�ŵ�build·���¡�
6.�Զ��������У�
"dev:build": "tsc -w",

"dev:start": "nodemon node ./build/crowller.js",

"dev": "concurrently npm:dev:*"