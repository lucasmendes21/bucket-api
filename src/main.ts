import { CmdRest } from './delivery/api/rest/cmd/cmd'

const REST = 'rest'

class Main {
    public initDev(): void {
        new CmdRest().server()
    }

    public init(): void {
        if (this.checkEnvVar()) {
            if (process.env.SERVER == REST) {
              new CmdRest().server()
            }
        }
    }

    public checkEnvVar(): boolean {
        if (!process.env.SERVER) {
            console.log('env var SERVER not found')
            return false
        }

        return true
    }
}

// new Main().init()
new Main().initDev()
