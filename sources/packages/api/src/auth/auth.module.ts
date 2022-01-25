import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import {
  ConfigService,
  InstitutionLocationService,
  InstitutionUserAuthService,
  StudentRestrictionService,
  KeycloakService,
  TokensService,
  UserService,
  StudentService,
  SFASIndividualService,
} from "../services";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { JwtStrategy } from "./jwt.strategy";
import { KeycloakConfig } from "./keycloakConfig";
import {
  InstitutionLocationGuard,
  AuthorizedPartiesGuard,
  InstitutionAdminGuard,
  ActiveUserGuard,
  GroupsGuard,
  RestrictionsGuard,
  SINValidationGuard,
} from "./guards";
import { RolesGuard } from "./guards/roles.guard";

const jwtModule = JwtModule.register({
  publicKey: KeycloakConfig.PEM_PublicKey,
});

@Module({
  imports: [PassportModule, jwtModule],
  providers: [
    UserService,
    InstitutionLocationService,
    InstitutionUserAuthService,
    StudentRestrictionService,
    TokensService,
    KeycloakService,
    ConfigService,
    JwtStrategy,
    StudentService,
    SFASIndividualService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthorizedPartiesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ActiveUserGuard,
    },
    {
      provide: APP_GUARD,
      useClass: GroupsGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: InstitutionAdminGuard,
    },
    {
      provide: APP_GUARD,
      useClass: InstitutionLocationGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RestrictionsGuard,
    },
    {
      provide: APP_GUARD,
      useClass: SINValidationGuard,
    },
  ],
  exports: [jwtModule, TokensService, KeycloakService],
})
export class AuthModule {}
