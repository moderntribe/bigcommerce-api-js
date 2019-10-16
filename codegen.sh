#!/usr/bin/env bash

set -eo pipefail

SCRIPTDIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd "$SCRIPTDIR"

apis=("store" "orders" "cart" "channels" "sites" "pricing" "abandoned_cart" "widgets" "wishlist" "subscribers" "price_lists" "scripts" "themes" "transactions" "catalog")

maven_cache_repo="${SCRIPTDIR}/.swagger-codegen/.m2/repository"
build_dir="${SCRIPTDIR}/.swagger-codegen/build"
codegen_dir="${SCRIPTDIR}/swagger-codegen"
jar="modules/swagger-codegen-cli/target/swagger-codegen-cli.jar"
cmd="java -DmodelTests=false -DmodelDocs=false -DapiTests=false -DapiDocs=false -Dapis -Dmodels -DsupportingFiles -jar /gen/$jar"

mkdir -p "${maven_cache_repo}"
mkdir -p "${build_dir}"


for api in "${apis[@]}"; do

input="/sdk/vendor/moderntribe/bigcommerce-api-swagger/swagger/${api}.yaml"
template_dir="/sdk/swagger/templates"
output="/sdk/.swagger-codegen/build"
config="/sdk/config.json"

docker run --rm -it \
        -w /sdk \
        -e GEN_DIR=/gen \
        -e MAVEN_CONFIG=/var/maven/.m2 \
        -u "$(id -u):$(id -g)" \
        -v "${PWD}:/sdk" \
        -v "${codegen_dir}:/gen" \
        -v "${maven_cache_repo}:/var/maven/.m2/repository" \
        maven:3-jdk-7 $cmd generate --template-dir "${template_dir}" -i "${input}" -l javascript -o "${output}" -c "${config}"

done

mkdir -p "${SCRIPTDIR}/src/Api/"
mkdir -p "${SCRIPTDIR}/src/Model/"

cp -R "${build_dir}/src/Api/." "${SCRIPTDIR}/src/Api/"
cp -R "${build_dir}/src/Model/." "${SCRIPTDIR}/src/Model/"
cp "${build_dir}/src/ApiClient.js" "${SCRIPTDIR}/src/"
cp "${build_dir}/src/index.js" "${SCRIPTDIR}/src/"
rm -rf "${build_dir}"
