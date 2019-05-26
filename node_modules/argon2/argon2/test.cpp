#include "include/argon2.h"
#include <cstring>
#include <iostream>

int main(int argc, char** argv)
{
    argon2_context context;

    char out[32];
    char* pwd = strdup("password");
    char* salt = strdup("saltsaltsaltsalt");
    char* ad = strdup("adadadadadadadad");
    context.out = (uint8_t*)out;
    context.outlen = 32;
    context.pwd = (uint8_t*)pwd;
    context.pwdlen = 8;
    context.salt = (uint8_t*)salt;
    context.saltlen = 16;
    context.secret = nullptr;
    context.secretlen = 0;
    context.ad = (uint8_t*)ad;
    context.adlen = 16;
    context.t_cost = 3;
    context.m_cost = 1 << 12;
    context.lanes = 1;
    context.threads = 1;
    context.allocate_cbk = nullptr;
    context.free_cbk = nullptr;
    context.flags = ARGON2_DEFAULT_FLAGS;
    context.version = ARGON2_VERSION_NUMBER;

    int result = argon2_ctx(&context, Argon2_i);
    std::cout << std::string{out, 32} << std::endl;

    return 0;
}
